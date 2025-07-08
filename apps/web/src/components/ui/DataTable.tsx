import {
  ColumnDef,
  FilterFn,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "./Input";
import React from "react";
import { rankItem } from "@tanstack/match-sorter-utils";
import { DataTablePagination } from "./DataTablePagination";
import { Card, CardContent } from "./Card";
import { Ban } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  actions?: React.ReactNode;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

function DataTable<TData, TValue>({
  data,
  columns,
  actions,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      //   sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-end py-4 gap-4">
        <Input
          placeholder="Search..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(String(event.target.value))}
          className="max-w-sm h-9"
        />

        {actions}
      </div>

      {table.getRowModel().rows?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {table.getRowModel().rows.map((row) => (
            <Card className="border-2 border-dashed shadow-none p-6 border-yellow-600 bg-yellow-50">
              {/* <img
                src={""}
                alt={""}
                className="w-full h-32 object-cover rounded"
              /> */}
              <h3 className="font-semibold mt-2">Hello</h3>
              <p className="text-sm text-muted-foreground">Working</p>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-2 border-dashed border-yellow-600 bg-yellow-50 shadow-none text-center p-6 animate-pulse">
          <CardContent className="flex flex-col items-center justify-center gap-4">
            <Ban className="text-yellow-700 w-10 h-10" />
            <h3 className="font-bold text-lg text-yellow-800">
              No Results Found
            </h3>
            <p className="text-sm text-yellow-700">
              Try adjusting your filters or search terms.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="w-full pt-8 pb-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}

export default DataTable;
