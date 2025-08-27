type pngIconType = {
  children: React.ReactNode;
  png: boolean;
  svg?: never;
};

type svgIconType = {
  children: React.ReactNode;
  png?: never;
  svg: never;
};

export type IconTye = pngIconType | svgIconType;
