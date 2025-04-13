"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker() {
  const [date, setDate] = useState(null); // Start with null to indicate no date selected

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal"
        >
          {/* Ensure the icon is always visible */}
          <CalendarIcon className="mr-2 h-4 w-4 opacity-100 text-black" />

          {/* Handle text visibility based on date */}
          <span className={cn("text-gray-500", date ? "text-black" : "")}>
            {date ? format(date, "PPP") : "Planifier"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate); // Update the date when the user selects a date
            console.log(newDate); // Confirm the date is updated
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
