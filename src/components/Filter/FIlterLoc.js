"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useQuery } from "@/hooks/useQuery";

import { SearchName } from "./search-name";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";

interface Props {
    filters: Array<{ type: string; values: Array<string> }>;
}

export const Filter = ({ filters }: Props) => {
    const { handleQuery, checkParam } = useQuery();
    const matches = useMediaQuery("(min-width: 768px)");
    const [openFilter, setOpenFilter] = useState(matches ? ["filters"] : []);

    const handleOpenFilter = () => {
        const isOpened = openFilter.some((i) => i === "filters");
        setOpenFilter(isOpened ? [] : ["filters"]);
    };

    useEffect(() => {
        setOpenFilter(matches ? ["filters"] : []);
    }, [matches]);

    return (
        <Accordion
            type='multiple'
            value={openFilter}
            defaultValue={openFilter}
            className='min-w-[250px] md:max-w-[250px] bg-background flex flex-col w-full top-20 md:sticky max-h-[calc(100vh-145.5px)] overflow-y-auto overflow-x-hidden md:pr-1 md:pl-2'>
            <AccordionItem value={`filters`}>
                <AccordionTrigger
                    className='capitalize hover:bg-muted hover:no-underline rounded-md px-2 py-1'
                    onClick={handleOpenFilter}>
                    <h2 className='py-2 font-bold'>Filters</h2>
                </AccordionTrigger>
                <AccordionContent className='py-2 px-1'>
                    <SearchName />
                    <Accordion
                        type='multiple'
                        defaultValue={matches ? ["item-0", "item-1", "item-2"] : []}
                        className='w-full sm:mr-2 mr-8'>
                        {filters.map(({ type, values }, i) => (
                            <AccordionItem key={type} value={`item-${i}`}>
                                <AccordionTrigger className='capitalize hover:bg-muted hover:no-underline rounded-md px-2 py-2 bg-foreground/10'>
                                    {type}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {values.map((value) => (
                                        <Button
                                            variant='link'
                                            key={value}
                                            className={`p-2 rounded-md w-full justify-start cursor-pointer ${checkParam({ type, value })
                                                ? "bg-nuclear/40"
                                                : "hover:bg-muted"
                                                }`}
                                            onClick={() => handleQuery({ type, value })}>
                                            {value}
                                        </Button>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};