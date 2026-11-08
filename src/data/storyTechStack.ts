// Tools on the story page: the main four first, then everything else.
import awsIcon from "../assets/story/stack/aws.svg";
import expressIcon from "../assets/story/stack/express.svg";
import flutterIcon from "../assets/story/stack/flutter.svg";
import javaIcon from "../assets/story/stack/java.svg";
import mongodbIcon from "../assets/story/stack/mongodb.svg";
import mysqlIcon from "../assets/story/stack/mysql.svg";
import nestjsIcon from "../assets/story/stack/nestjs.svg";
import nextjsIcon from "../assets/story/stack/nextjs.svg";
import postgresqlIcon from "../assets/story/stack/postgresql.svg";
import reactIcon from "../assets/story/stack/react.svg";
import springBootIcon from "../assets/story/stack/spring-boot.svg";
import typescriptIcon from "../assets/story/stack/typescript.svg";

export type Tool = { name: string; icon: string };

export const MAIN_STACK: Tool[] = [
  { name: "Next.js", icon: nextjsIcon },
  { name: "React", icon: reactIcon },
  { name: "NestJS", icon: nestjsIcon },
  { name: "Spring Boot", icon: springBootIcon },
];

export const ALSO_STACK: Tool[] = [
  { name: "Express", icon: expressIcon },
  { name: "Java", icon: javaIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Flutter", icon: flutterIcon },
  { name: "AWS", icon: awsIcon },
];
