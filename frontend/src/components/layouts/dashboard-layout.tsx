type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-5xl mx-auto my-12">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {children}
    </div>
  );
};
