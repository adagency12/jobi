'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "👋 Hi there! I'm JOBBEI's AI assistant. I can help you with quotes, scheduling, and any questions about our home services. What can I help you with today?",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputValue;
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('https://n8n.srv1147675.hstgr.cloud/webhook/Jobee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: currentInput,
                    timestamp: new Date().toISOString(),
                    sessionId: `chat_${Date.now()}`,
                    source: 'website_chat'
                })
            });

            const data = await response.json();

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data.response || "Thanks for your message! I'll connect you with our team shortly. In the meantime, feel free to ask about our services!",
                isUser: false,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm having trouble connecting right now. Please try again or contact us directly at your convenience!",
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const toggleChat = () => {
        if (isOpen) {
            setIsOpen(false);
            setIsMinimized(false);
        } else {
            setIsOpen(true);
            setIsMinimized(false);
        }
    };

    const minimizeChat = () => {
        setIsMinimized(true);
    };

    return (
        <>
            {/* Chat Widget Button */}
            <div
                className={`${styles.chatButton} ${isOpen ? styles.chatButtonOpen : ''}`}
                onClick={toggleChat}
            >
                <div className={styles.buttonContent}>
                    {isOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <>
                            <div className={styles.robotIcon}>🤖</div>
                            <div className={styles.buttonText}>
                                <span className={styles.buttonTitle}>Need Help?</span>
                                <span className={styles.buttonSubtitle}>Chat with JOBBEI AI</span>
                            </div>
                        </>
                    )}
                </div>
                {!isOpen && <div className={styles.pulseRing}></div>}
            </div>

            {/* Chat Widget Window */}
            {isOpen && (
                <div className={`${styles.chatWidget} ${isMinimized ? styles.minimized : ''}`}>
                    <div className={styles.chatHeader}>
                        <div className={styles.headerContent}>
                            <div className={styles.avatar}>
                                <div className={styles.avatarIcon}>🤖</div>
                                <div className={styles.onlineIndicator}></div>
                            </div>
                            <div className={styles.headerText}>
                                <h3>JOBBEI AI Assistant</h3>
                                <p><span className={styles.onlineDot}></span>Online • Typically replies instantly</p>
                            </div>
                        </div>
                        <div className={styles.headerActions}>
                            <button
                                className={styles.minimizeButton}
                                onClick={minimizeChat}
                                title="Minimize"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            <button
                                className={styles.closeButton}
                                onClick={() => setIsOpen(false)}
                                title="Close"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            <div className={styles.chatMessages}>
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`${styles.message} ${message.isUser ? styles.userMessage : styles.aiMessage}`}
                                    >
                                        {!message.isUser && (
                                            <div className={styles.messageAvatar}>
                                                <div className={styles.aiAvatarIcon}>🤖</div>
                                            </div>
                                        )}
                                        <div className={styles.messageContent}>
                                            <div className={styles.messageBubble}>
                                                <p>{message.text}</p>
                                            </div>
                                            <span className={styles.timestamp}>
                                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className={`${styles.message} ${styles.aiMessage}`}>
                                        <div className={styles.messageAvatar}>
                                            <div className={styles.aiAvatarIcon}>🤖</div>
                                        </div>
                                        <div className={styles.messageContent}>
                                            <div className={styles.messageBubble}>
                                                <div className={styles.typingIndicator}>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <div className={styles.chatInput}>
                                <div className={styles.inputContainer}>
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        disabled={isLoading}
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={!inputValue.trim() || isLoading}
                                        className={styles.sendButton}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.poweredBy}>
                                    Powered by <strong>JOBBEI AI</strong>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
