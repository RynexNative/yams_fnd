import { Label } from "@/components/ui/label";

export const ViewField = ({ label, value }: { label: string; value?: string | number }) => (
  <div>
    <Label className="text-muted-foreground">{label}</Label>
    <p className="font-medium whitespace-pre-wrap">{value || "-"}</p>
  </div>
);

export const ViewTextarea = ({ label, value }: { label: string; value?: string }) => (
  <div>
    <Label className="text-muted-foreground">{label}</Label>
    <p className="mt-1 whitespace-pre-wrap rounded-md border bg-muted/40 p-3">
      {value || "-"}
    </p>
  </div>
);
