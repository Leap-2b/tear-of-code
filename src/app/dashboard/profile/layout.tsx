import ProfileHeader from "./_components/profileheader";

export default function ProfileMenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="max-w-[768px] m-auto min-h-screen">
          <ProfileHeader /> {children}
        </div>
      </body>
    </html>
  );
}
