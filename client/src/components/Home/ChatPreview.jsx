import React from 'react'

const ChatPreview = () => {
  return (
    <>
    <div className="chat chat-receiver">
        <div className="chat-avatar avatar">
            <div className="size-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
            </div>
        </div>
        <div className="chat-header text-base-content/90">
            John Doe
            <time className="text-base-content/50">12:45</time>
        </div>
        <div className="chat-bubble">I started learning guitar today!</div>
        <div className="chat-footer text-base-content/50">
            <div>Delivered</div>
        </div>
    </div>
    <div className="chat chat-sender">
        <div className="chat-avatar avatar">
            <div className="size-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
            </div>
        </div>
        <div className="chat-header text-base-content/90">
            Jane Doe
            <time className="text-base-content/50">12:46</time>
        </div>
        <div className="chat-bubble">That's awesome! You're going to be great at it!</div>
        <div className="chat-footer text-base-content/50">
            Seen
            <span className="icon-[tabler--checks] text-success align-bottom"></span>
        </div>
    </div>
    <div className="chat chat-receiver">
        <div className="chat-avatar avatar">
            <div className="size-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
            </div>
        </div>
        <div className="chat-header text-base-content/90">
            John Doe
            <time className="text-base-content/50">12:45</time>
        </div>
        <div className="chat-bubble">We should play together!</div>
        <div className="chat-footer text-base-content/50">
            <div>Delivered</div>
        </div>
    </div>
    <div className="chat chat-sender">
        <div className="chat-avatar avatar">
            <div className="size-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
            </div>
        </div>
        <div className="chat-header text-base-content/90">
            Jane Doe
            <time className="text-base-content/50">12:46</time>
        </div>
        <div className="chat-bubble">Totally that would be so much fun!</div>
        <div className="chat-footer text-base-content/50">
            Seen
            <span className="icon-[tabler--checks] text-success align-bottom"></span>
        </div>
    </div>
    </>
  )
}

export default ChatPreview