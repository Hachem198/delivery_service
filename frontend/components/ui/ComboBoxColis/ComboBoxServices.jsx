"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";

const services = [
  {
    value: "Transport(Meuble/éléctroménager)",
    label: "Transport(Meuble/éléctroménager)",
  },
  {
    value: "Transport(Approvisionnement agro-alimentation)",
    label: "Transport(Approvisionnement agro-alimentation)",
  },
  {
    value: "Transport(Matériaux de construction)",
    label: "Transport(Matériaux de construction)",
  },
  {
    value: "autre",
    label: "Autre...",
  },
];

export default function ComboBoxServices({
  selectedService,
  setSelectedService,
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelect = (currentValue) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setSelectedService(newValue); // Update the selected service in sync with value
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen} className="flex-1">
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full md:w-[250px] max-w-full justify-between"
        >
          <span
            className={cn(
              "truncate", // Ensure long text doesn't overflow
              value ? "text-black" : "text-gray-400" // Style for selected value or placeholder
            )}
          >
            {value
              ? services.find((service) => service.value === value)?.label
              : "Sélectionner le service..."}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[250px] max-w-full p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Aucun service trouvé.</CommandEmpty>
            <CommandGroup>
              {services.map((service) => (
                <CommandItem
                  key={service.value}
                  value={service.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === service.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {service.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
