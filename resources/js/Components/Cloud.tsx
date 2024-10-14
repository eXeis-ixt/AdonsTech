import IconCloud from "@/Components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "nginx",
  "mysql",
  "php",
  "vercel",
  "docker",
  "git",
  "github",
  "adobephotoshop",
  "tailwindcss",
  "laravel",
  "figma",
  "adobeillustrator",
];

export function Cloud() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
