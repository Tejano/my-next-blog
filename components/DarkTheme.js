function DarkTheme() {
    return (
      <style jsx global>{`
        :root {
          --background-color: rgb(14, 14, 14);
          --link-color: rgb(219, 196, 17);
          --text-color: rgb(230, 230, 230);
        }
      `}</style>
    );
}

export default DarkTheme
