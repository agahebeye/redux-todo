import { ActionButtons } from "./ActionButtons";
import { StatusFilters } from "./StatusFilters";
import { ColorsFilters } from "./ColorsFilters";

export function Footer() {
  return (
    <footer className="mt-8 text-xs flex justify-between">
      <ActionButtons />
      <StatusFilters />
      <ColorsFilters />
    </footer>
  );
}
