import { Navbar } from "../ui/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container max-w-5xl mx-auto mt-10">{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
