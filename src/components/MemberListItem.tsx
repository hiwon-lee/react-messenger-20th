import styled from 'styled-components';
import { MainButton, OnlineTaggedButton } from './Button';
import { ChatInterface, ReceiverState } from '@interface/ChatInterface';

export default function ListItem(user: ReceiverState) {
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
      <div className="grow flex gap-1 border-solid border-b-[1px] border-gray-70">
        <div className="flex flex-col gap-1 grow">
          {/* 사용자 이름 */}
          <div>{user.name}</div>
          {/* item 내용 미리보기 */}
          <div className="text-body text-gray-500">
            {user.lastMessage ? user.lastMessage : ''}
          </div>
        </div>
        <div className="text-caption text-gray-500">{user.lastTimeStamp}</div>
      </div>
    </StyledList>
  );
}

export function MemberListItem(user: ReceiverState) {
  return (
    <StyledList>
      {user.profileImg ? (
        <OnlineTaggedButton
          src={user.profileImg}
          type="button"
        />
      ) : (
        <OnlineTaggedButton
          children={user.name.charAt(0)}
          type="button"
        />
      )}
      <div className=" py-4 grow flex gap-1 border-solid border-b-[1px] border-gray-70">
        <div className="flex flex-col justify-center gap-1 grow">
          {/* 사용자 이름 */}
          <div className="font-subtitle">{user.name}</div>
          {/* item 내용 미리보기 */}
          {user.lastMessage && (
            <StyledMessagePreview className="text-body text-gray-500">
              {user.lastMessage}
            </StyledMessagePreview>
          )}
        </div>
        <div className="text-caption text-gray-500">{user.lastTimeStamp}</div>
      </div>
    </StyledList>
  );
}

const StyledList = styled.div`
  display: flex;
  margin: 0 1rem;
  height: 78px;
  gap: 1rem;
  border
`;

const StyledMessagePreview = styled.div`
  max-width: 220px;
  height: 100%;
  font-size: var(--font-body);
  color: var(--gray-500);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
