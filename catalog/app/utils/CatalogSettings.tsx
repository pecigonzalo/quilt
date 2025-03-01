import type { S3 } from 'aws-sdk'
import * as React from 'react'

import cfg from 'constants/config'
import * as AWS from 'utils/AWS'
import * as Cache from 'utils/ResourceCache'

const CONFIG_KEY = 'catalog/settings.json'

export interface CatalogSettings {
  beta?: boolean
  customNavLink?: {
    url: string
    label: string
  }
  logo?: {
    url: string
  }
  search?: {
    mode?: 'packages' | 'objects' | null
  }
  theme?: {
    palette: {
      primary: {
        main: string
      }
    }
  }
}

async function fetchSettings({ s3 }: { s3: S3 }) {
  if (cfg.mode === 'MARKETING' || cfg.mode === 'LOCAL') return null

  const location = `s3://${cfg.serviceBucket}/${CONFIG_KEY}`
  try {
    const res = await s3
      .getObject({ Bucket: cfg.serviceBucket, Key: CONFIG_KEY })
      .promise()
    const text = res.Body!.toString('utf-8')
    return JSON.parse(text) as CatalogSettings
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(`Error fetching catalog settings from "${location}":`)
    // eslint-disable-next-line no-console
    console.error(e)
    return null
  }
}

const CatalogSettingsResource = Cache.createResource({
  name: 'CatalogSettings.config',
  fetch: fetchSettings,
  // @ts-expect-error
  key: () => null,
})

function format(settings: CatalogSettings) {
  return JSON.stringify(settings, null, 2)
}

// FIXME: remove if decide to not use file upload for logo
export function useUploadFile() {
  return React.useCallback(async (file: File) => {
    // eslint-disable-next-line no-console
    console.log(file)
    throw new Error('This functionality is not ready yet')
  }, [])
}

export function useWriteSettings() {
  const s3 = AWS.S3.use()
  const cache = Cache.use()

  return React.useCallback(
    async (settings: CatalogSettings) => {
      const body = format(settings)
      await s3
        .putObject({ Bucket: cfg.serviceBucket, Key: CONFIG_KEY, Body: body })
        .promise()
      cache.patchOk(CatalogSettingsResource, null, () => settings)
    },
    [s3, cache],
  )
}

export function useCatalogSettings() {
  const s3 = AWS.S3.use()
  return Cache.useData(
    CatalogSettingsResource,
    { s3 },
    { suspend: true },
  ) as CatalogSettings | null
}

export { useCatalogSettings as use }
