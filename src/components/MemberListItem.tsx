import styled from 'styled-components';
import { MainButton } from './Button';
import { ChatInterface, ReceiverState } from '@interface/ChatInterface';

export default function MemberListItem(user: ReceiverState) {
  return (
    <StyledList>
      {user.profileImg ? (
        <MainButton
          src={user.profileImg}
          type="button"
        />
      ) : (
        <MainButton
          children={user.name.charAt(0)}
          type="button"
        />
      )}
      <div className="flex flex-col gap-1">
        <div>{user.name}</div>
        <div className="text-body text-gray-500">
          {user.lastMessage ? user.lastMessage : ''}
        </div>
      </div>
      <div className="ms-auto text-caption text-gray-500">
        {user.lastTimeStamp}
      </div>
    </StyledList>
  );
}

const StyledList = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;
  border-bottom: 1px solid var(--gray-100);
`;
