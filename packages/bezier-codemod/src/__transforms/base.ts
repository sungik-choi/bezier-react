export interface TransformResult {
  filePath: string
  changed: boolean
  error?: Error
}

export interface Options {
  dry?: boolean
  print?: boolean
}

export interface Transformer {
  execute: (path: string, options: Options) => Promise<TransformResult[]>
}
