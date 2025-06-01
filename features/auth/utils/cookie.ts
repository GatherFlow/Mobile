import { Maybe } from "@/core/types";

export const parseCookie = (header: Maybe<string>): Maybe<string> => {
  return header ? header.split(';')[0] : null
}
