import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { interpolate } from "flubber";
import { MotionValue, useTransform } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getIndex = (_: any, index: number) => index;

export function useFlubber(progress: MotionValue<number>, paths: string[]) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 })
  });
}