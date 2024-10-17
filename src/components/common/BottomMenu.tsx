import NamedButton from '@components/Button';
import CHAT from '@menuIcon/chat.png';
import MEMBERS from '@menuIcon/members.png';
import MORE from '@menuIcon/more.png';
import NOTICE from '@menuIcon/notice.png';
import TEAM from '@menuIcon/team.png';
import styled from 'styled-components';

export default function BottomMenu() {
  return (
    <StyledBottomMenu>
      <NamedButton
        src={MEMBERS}
        type="button"
        buttonName="구성원"
      />
      <NamedButton
        src={NOTICE}
        type="button"
        buttonName="그룹홍보"
      />
      <NamedButton
        src={CHAT}
        type="button"
        buttonName="채팅"
      />

      <NamedButton
        src={TEAM}
        type="button"
        buttonName="팀"
      />
      <NamedButton
        src={MORE}
        type="button"
        buttonName="더보기"
      />
    </StyledBottomMenu>
  );
}

const StyledBottomMenu = styled.div`
  display: flex;
  margin: 1rem;
  gap: 0.5rem;
`;
