import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Switch } from "@/components/ui/Switch";
// import { Switch } from "@/components/ui/switch";

// Sample data
const data = [
  {
    id: "1",
    title: "Intro to JavaScript",
    description: "Learn JS fundamentals",
    image: "https://via.placeholder.com/150/1E40AF/FFFFFF?text=JS",
  },
  {
    id: "2",
    title: "Mastering React",
    description: "Deep dive into React",
    image: "https://via.placeholder.com/150/047857/FFFFFF?text=React",
  },
  {
    id: "3",
    title: "Advanced CSS",
    description: "Level up your styling",
    image: "https://via.placeholder.com/150/92400E/FFFFFF?text=CSS",
  },
  {
    id: "4",
    title: "Node.js Backend",
    description: "API with Express",
    image: "https://via.placeholder.com/150/059669/FFFFFF?text=Node",
  },
  {
    id: "5",
    title: "TypeScript Essentials",
    description: "Typing in JS",
    image: "https://via.placeholder.com/150/9333EA/FFFFFF?text=TS",
  },
  {
    id: "6",
    title: "Tailwind CSS",
    description: "Utility-first styling",
    image: "https://via.placeholder.com/150/BE185D/FFFFFF?text=TW",
  },
];

// Define columns (for table view)
const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

export default function CardTableToggle() {
  const [view, setView] = useState<"grid" | "list">("grid");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Courses</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Grid</span>
          <Switch
            checked={view === "list"}
            onCheckedChange={(v) => setView(v ? "list" : "grid")}
          />
          <span className="text-sm font-semibold">List</span>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex bg-[#fffde8] flex-col items-center text-center shadow-lg hover:shadow-none transition-all ease-linear duration-200 rounded-md"
              //   className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      ) : (
        <>Hello</>
        // <Table>
        //   <TableHeader>
        //     {table.getHeaderGroups().map((headerGroup) => (
        //       <TableRow key={headerGroup.id}>
        //         {headerGroup.headers.map((header) => (
        //           <TableHead key={header.id}>
        //             {header.column.columnDef.header}
        //           </TableHead>
        //         ))}
        //       </TableRow>
        //     ))}
        //   </TableHeader>
        //   <TableBody>
        //     {table.getRowModel().rows.map((row) => (
        //       <TableRow key={row.id}>
        //         {row.getVisibleCells().map((cell) => (
        //           <TableCell key={cell.id}>{cell.renderValue()}</TableCell>
        //         ))}
        //       </TableRow>
        //     ))}
        //   </TableBody>
        // </Table>
      )}
    </div>
  );
}
