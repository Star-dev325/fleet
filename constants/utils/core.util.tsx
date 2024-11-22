export const formatNumber = (number: number): string => {
  return number.toLocaleString("en-US");
};

export const formatFileSize = (bytes: number): string => {
  const sizes: string[] = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i: number = Math.floor(Math.log(bytes) / Math.log(1024));
  const size: number = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
  return `${size}${sizes[i]}`;
};

export const formatDayInSpanish = (date: Date): string => {
  const spanishFormatter = new Intl.DateTimeFormat("es-ES", {
    weekday: "short",
  });

  return spanishFormatter.format(date);
};
