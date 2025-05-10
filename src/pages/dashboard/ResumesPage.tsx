import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ResumesPage() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-prussian-blue">
        Resumes
      </h2>
      <Table>
        <TableCaption>A list of your resumes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Resume 1</TableCell>
            <TableCell>2021-01-01</TableCell>
            <TableCell>2021-01-01</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
