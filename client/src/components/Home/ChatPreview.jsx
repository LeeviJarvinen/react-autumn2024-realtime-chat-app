import React from 'react'

const ChatPreview = () => {
  return (
    <>
    <div class="chat chat-receiver">
        <div class="chat-avatar avatar">
            <div class="size-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
            </div>
        </div>
        <div class="chat-header text-base-content/90">
            John Doe
            <time class="text-base-content/50">12:45</time>
        </div>
        <div class="chat-bubble">I started learning guitar today!</div>
        <div class="chat-footer text-base-content/50">
            <div>Delivered</div>
        </div>
    </div>
    <div class="chat chat-sender">
        <div class="chat-avatar avatar">
            <div class="size-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
            </div>
        </div>
        <div class="chat-header text-base-content/90">
            Jane Doe
            <time class="text-base-content/50">12:46</time>
        </div>
        <div class="chat-bubble">That's awesome! You're going to be great at it!</div>
        <div class="chat-footer text-base-content/50">
            Seen
            <span class="icon-[tabler--checks] text-success align-bottom"></span>
        </div>
    </div>
    <div class="chat chat-receiver">
        <div class="chat-avatar avatar">
            <div class="size-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
            </div>
        </div>
        <div class="chat-header text-base-content/90">
            John Doe
            <time class="text-base-content/50">12:45</time>
        </div>
        <div class="chat-bubble">I started learning guitar today!</div>
        <div class="chat-footer text-base-content/50">
            <div>Delivered</div>
        </div>
    </div>
    <div class="chat chat-sender">
        <div class="chat-avatar avatar">
            <div class="size-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar" />
            </div>
        </div>
        <div class="chat-header text-base-content/90">
            Jane Doe
            <time class="text-base-content/50">12:46</time>
        </div>
        <div class="chat-bubble">That's awesome! You're going to be great at it!</div>
        <div class="chat-footer text-base-content/50">
            Seen
            <span class="icon-[tabler--checks] text-success align-bottom"></span>
        </div>
    </div>
    </>
  )
}

export default ChatPreview