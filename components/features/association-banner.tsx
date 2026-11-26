import { siteConfig } from "@/lib/site-config";

/** Site-wide banner carrying the official host/association line. */
export function AssociationBanner() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-iot via-primary to-cyber px-4 py-2 text-center text-xs font-medium text-white sm:text-sm dark:text-background">
      <p>
        <strong className="font-semibold">Nexora 2.0</strong>
        <span aria-hidden> · </span>
        <span className="font-semibold">{siteConfig.host}</span> in association with{" "}
        <span className="font-semibold">{siteConfig.association}</span>
      </p>
    </div>
  );
}
