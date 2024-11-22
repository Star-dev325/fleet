import { FileProps } from "./util.interface";

export interface CheckListLayoutProps {
  children: React.ReactNode;
}

export interface ObservationModalProps {
  onClose: () => void;
}

export interface ObservationModalHeaderProps {
  onClose: () => void;
}

export interface NoteProps {
  content?: string;
  image?: FileProps;
  audio?: FileProps;
  date: string;
}

export interface CompleteModalProps {
  onClose: () => void;
}
