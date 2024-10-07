import MORE from '@assets/menu/more.png';
export default function Header(title: String) {
  return (
    <div className="flex justify-between mx-5  h-10">
      <div>{title}</div>
      <img
        src={MORE}
        alt="more"
      />
    </div>
  );
}
