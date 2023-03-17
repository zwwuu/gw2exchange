import Image from "next/image";

type IconProps = {
  className?: string;
  size: number;
};

export function GemIcon({ className, size }: IconProps) {
  return <Image alt={"gem"} className={className} height={size} src={"/images/gem.png"} width={size} />;
}

export function GoldIcon({ className, size }: IconProps) {
  return <Image alt={"gold"} className={className} height={size} src={"/images/gold.png"} width={size} />;
}
export function SilverIcon({ className, size }: IconProps) {
  return <Image alt={"silver"} className={className} height={size} src={"/images/silver.png"} width={size} />;
}
export function CopperIcon({ className, size }: IconProps) {
  return <Image alt={"copper"} className={className} height={size} src={"/images/copper.png"} width={size} />;
}
