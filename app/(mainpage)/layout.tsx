const MainPageLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="bg-black">
        {children}
      </div>
    </>
  )
}

export default MainPageLayout;