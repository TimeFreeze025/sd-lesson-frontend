export type Subject = {
  id: number;
  name: string;
  code: string;
  description: string;
  department: string;
  createdAt: string;
  updatedAt: string;
};

export type ListResponse<T = unknown> = {
  data?: T[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export interface UploadWidgetValue {
  url: string;
  publicId: string;
}

export type UploadWidgetProps = {
  value?: UploadWidgetValue | null;
  onChange?: (value: UploadWidgetValue | null) => void;
  disabled?: boolean;
};

declare global {
  interface Window {
    cloudinary?: {
      createUploadWidget: (
        options: Record<string, unknown>,
        callback: (
          error: unknown,
          result: CloudinaryUploadWidgetResults,
        ) => void,
      ) => CloudinaryWidget;
    };
  }
}

export interface CloudinaryWidget {
  open: () => void;
}

export interface CloudinaryUploadWidgetResults {
  event: string;
  info: {
    secure_url: string;
    public_id: string;
    delete_token?: string;
    resource_type: string;
    original_filename: string;
  };
}
