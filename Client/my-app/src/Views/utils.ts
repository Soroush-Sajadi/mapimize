import { fields } from "src/Data/fields";

export const getOptions = (field: string | null): string[] => {
  return fields[field as keyof typeof fields] || fields.economy;
};
