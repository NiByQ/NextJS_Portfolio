export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`h-screen justify-center items-center flex`}>
      {children}
    </div>
  );
}
