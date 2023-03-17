export default function Footer() {
  return (
    <footer className={"bg-neutral text-neutral-content py-4"}>
      <div className={"container mx-auto px-4"}>
        <div className={"grid auto-rows-auto grid-cols-12 gap-4"}>
          <div className={"col-span-full md:col-span-4"}>
            <p>
              © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_AUTHOR}
            </p>
            <p>
              {"The source code is available on "}
              <a className={"link"} href={process.env.NEXT_PUBLIC_GITHUB_URL}>
                GitHub
              </a>
              .
            </p>
          </div>
          <div className={"divider md:divider-horizontal col-span-full md:col-span-1"}></div>
          <div className={"col-span-full md:col-span-7"}>
            <p>
              © 2023 ArenaNet, Inc. All rights reserved. NCsoft, the interlocking NC logo, ArenaNet, Arena.net, Guild
              Wars, Guild Wars Factions, Factions, Guild Wars Nightfall, Nightfall, Guild Wars: Eye of the North, Eye of
              the North, Guild Wars 2, and all associated logos and designs are trademarks or registered trademarks of
              NCsoft Corporation. All other trademarks are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
