import { useModal } from "../../hook/useModal";

export default function MyPage() {
  // 훅 예시
  const { open } = useModal();

  console.log(open);

  return <div>MyPage</div>;
}
