"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import { typeProduits } from "./typedeproduit";
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

export default function ComboBoxTypeProduits({ service }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const selectedLabel = typeProduits.find(
    (TypeProduit) => TypeProduit.value === value
  )?.label;

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
            className={cn("truncate", value ? "text-black" : "text-gray-400")}
          >
            {selectedLabel || "Sélectionner le type de produit..."}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[250px] max-w-full p-0">
        {service ? (
          <Command>
            <CommandInput placeholder="Rechercher un type..." />
            <CommandList>
              <CommandEmpty>Aucun type trouvé.</CommandEmpty>
              <CommandGroup>
                {typeProduits
                  .filter((TypeProduit) => TypeProduit.service === service)
                  .map((TypeProduit) => (
                    <CommandItem
                      key={TypeProduit.value}
                      value={TypeProduit.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === TypeProduit.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {TypeProduit.label}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        ) : (
          <div className="p-4 text-sm text-gray-500">
            Aucun service sélectionné.
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
