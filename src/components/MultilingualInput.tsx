import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MultilingualField } from "@/types/contact";

interface MultilingualInputProps {
  label: string;
  value: MultilingualField;
  onChange: (value: MultilingualField) => void;
  required?: boolean;
  type?: "input" | "textarea";
  maxLength?: number;
  placeholder?: {
    fr: string;
    ar: string;
    en: string;
  };
}

export function MultilingualInput({
  label,
  value,
  onChange,
  required = false,
  type = "input",
  maxLength,
  placeholder = { fr: "", ar: "", en: "" }
}: MultilingualInputProps) {
  const handleChange = (lang: "fr" | "ar" | "en", val: string) => {
    onChange({
      ...value,
      [lang]: val
    });
  };

  return (
    <div className="space-y-2">
      <Label>{label} {required && "*"}</Label>
      <Tabs defaultValue="fr" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fr">FR</TabsTrigger>
          <TabsTrigger value="ar">AR</TabsTrigger>
          <TabsTrigger value="en">EN</TabsTrigger>
        </TabsList>
        <TabsContent value="fr" className="mt-2">
          {type === "textarea" ? (
            <Textarea
              value={value.fr}
              onChange={(e) => handleChange("fr", e.target.value)}
              placeholder={placeholder.fr}
              required={required}
              rows={3}
            />
          ) : (
            <Input
              value={value.fr}
              onChange={(e) => handleChange("fr", e.target.value)}
              placeholder={placeholder.fr}
              required={required}
              maxLength={maxLength}
            />
          )}
        </TabsContent>
        <TabsContent value="ar" className="mt-2">
          {type === "textarea" ? (
            <Textarea
              value={value.ar}
              onChange={(e) => handleChange("ar", e.target.value)}
              placeholder={placeholder.ar}
              required={required}
              rows={3}
              dir="rtl"
            />
          ) : (
            <Input
              value={value.ar}
              onChange={(e) => handleChange("ar", e.target.value)}
              placeholder={placeholder.ar}
              required={required}
              maxLength={maxLength}
              dir="rtl"
            />
          )}
        </TabsContent>
        <TabsContent value="en" className="mt-2">
          {type === "textarea" ? (
            <Textarea
              value={value.en}
              onChange={(e) => handleChange("en", e.target.value)}
              placeholder={placeholder.en}
              required={required}
              rows={3}
            />
          ) : (
            <Input
              value={value.en}
              onChange={(e) => handleChange("en", e.target.value)}
              placeholder={placeholder.en}
              required={required}
              maxLength={maxLength}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
