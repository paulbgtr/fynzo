import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectProps = {
  title: string;
  description: string;
};

export const ProjectItem = ({ title, description }: ProjectProps) => {
  return (
    <a className="duration-200 hover:opacity-70" href={`/projects/${title}`}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
};
