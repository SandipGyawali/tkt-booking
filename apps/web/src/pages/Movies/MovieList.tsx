import AuthDashboardLayout from "@/layouts/Dashboard/AuthDashboardLayout";
import ProtectedLayout from "@/layouts/ProtectedLayout";
import { useState } from "react";
import CardTableToggle from "./CardTableToggle";
import DataTable from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/Button";

function MovieList() {
  const [isGrid, setIsGrid] = useState(true);

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

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt={row.original.title}
          className="w-12 h-12 object-cover rounded"
        />
      ),
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "id",
      header: "ID",
    },
  ];

  return (
    <ProtectedLayout>
      <AuthDashboardLayout
        breadcrumbs={[
          {
            title: "Movies",
            href: "/app/movies",
          },
        ]}
      >
        {/* <CardTableToggle /> */}
        <DataTable
          data={data}
          columns={columns}
          actions={<Button onClick={() => {}}>Hello</Button>}
        />
      </AuthDashboardLayout>
    </ProtectedLayout>
  );
}

export default MovieList;
