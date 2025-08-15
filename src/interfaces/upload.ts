export interface Uploads {
  file: string;
}

export interface FileUploadState {
  loading: boolean;
  success: boolean;
  error: string | null;
}
