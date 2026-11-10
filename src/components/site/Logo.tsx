import logo from "@/assets/gyroz-logo.png";

import { cn } from "@/lib/utils";

export function Logo({ large = false }: { large?: boolean }) {
  return (
    <img
      src={logo}
      alt="GYROZ STUDIO — Ideas, Shoot, Edit, Publish, Grow"
      width={720}
      height={240}
      className={cn(
        "w-auto rounded-md object-contain object-left-top",
        large ? "h-14 md:h-16" : "h-8 md:h-9",
      )}
    />
  );
}
