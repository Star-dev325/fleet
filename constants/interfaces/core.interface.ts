import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { Audio, AVPlaybackStatus } from "expo-av";
import React from "react";

// Pincode Input Props
export interface PinCodeInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  secure?: boolean;
  error?: boolean;
}

export interface BoxProps {
  isFilled: boolean;
  isFocused: boolean;
  value: string;
  secure: boolean;
}

// SearchBar Props
export interface SearchBarProps {
  value?: string;
  style?: any;
  placeholder?: string;
  onChange?: (value: string) => void;
}

// Button Props
export interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  onClickButton?: () => void;
}

// Button Group Props
export interface ButtonGroupProps {
  buttons: Array<string>;
  icon?: React.ReactNode;
  select: number;
  buttonGroupStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  currentValue?: any
  setCurrentValue?: any
}

// Divier Props
export interface DividerProps {
  dividerStyle?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  description?: string;
}

// Alert Props
export enum AlertType {
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export interface AlertProps {
  type: AlertType;
  message: string;
  visible: boolean;
  onClose: () => void;
}

// Step Props
export interface StepProps {
  steps: Array<string>;
  current: number;
}

// Checkbox Props
export interface CheckboxProps {
  checkedBoxStyle?: StyleProp<ViewStyle>;
  unCheckedBoxStyle?: StyleProp<ViewStyle>;
  checkedColor?: string;
  unCheckedColor?: string;
  checked: boolean;
  current?: boolean;
}

// Modal Props
export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Audio Player Props
export interface AudioPlayerProps {
  audioUri: string;
  onPlaybackStatusChange?: (isPlaying: boolean) => void;
}

export interface AudioPlayerState {
  sound: Audio.Sound | null;
  isPlaying: boolean;
  isLoading: boolean;
  duration: number;
  position: number;
}

export type PlaybackStatus = AVPlaybackStatus & {
  isLoaded: true;
  durationMillis: number;
  positionMillis: number;
  isPlaying: boolean;
};

// Pagination Props
export interface PaginationProps {
  paginationStyle?: StyleProp<ViewStyle>;
  pageSize: number;
  total: number;
  current: number;
  onBefore?: () => void;
  onNext?: () => void;
}

// Progress Props
export interface ProgressProps {
  progress: number;
}

// Calendar Props
export interface CalendarProps {
  startDate: Date;
  duration: number;
  selectDate: Date;
  onChange?: (date: Date) => void;
}
