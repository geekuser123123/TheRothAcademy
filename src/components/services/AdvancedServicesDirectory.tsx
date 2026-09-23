import { ServiceDirectory } from "@/components/services/ServiceDirectory";
import { advancedServiceCategories, advancedServices } from "@/data/advanced-services-content";

export function AdvancedServicesDirectory() {
  return (
    <ServiceDirectory
      eyebrow="Find Your Direction"
      heading="A Deeper Bench Of Possibilities."
      services={advancedServices}
      categories={advancedServiceCategories}
    />
  );
}
