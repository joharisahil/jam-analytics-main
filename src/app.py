import tkinter as tk
from tkinter import ttk, scrolledtext
from components.chatbot import JamAnalyticsChatbot
import threading
import time

class JamAnalyticsChatbotGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Jam Analytics Assistant")
        self.root.geometry("400x600")
        self.root.resizable(False, False)

        # Initialize the chatbot
        self.chatbot = JamAnalyticsChatbot("src/data/knowledge_base.json")

        # State variables
        self.is_open = False
        self.messages = [(self.chatbot.get_greeting(), "bot")]

        # Create the main frame
        self.main_frame = tk.Frame(self.root, bg="#f0f0f0")
        self.main_frame.pack(fill="both", expand=True)

        # Toggle button (mimics the chat bubble in the React code)
        self.toggle_button = tk.Button(
            self.main_frame,
            text="💬",
            font=("Arial", 20),
            bg="#2563eb",
            fg="white",
            command=self.toggle_chat,
            relief="flat",
            borderwidth=0,
            width=4,
            height=2
        )
        self.toggle_button.place(x=340, y=540)

        # Chat window (hidden initially)
        self.chat_frame = tk.Frame(self.main_frame, bg="white", borderwidth=1, relief="solid")
        self.chat_frame.place(x=0, y=0, width=400, height=600)

        # Header
        self.header = tk.Frame(self.chat_frame, bg="#2563eb")
        self.header.pack(fill="x")
        tk.Label(
            self.header,
            text="Jam Analytics Assistant",
            font=("Arial", 14, "bold"),
            bg="#2563eb",
            fg="white",
            pady=10
        ).pack(side="left", padx=10)
        tk.Button(
            self.header,
            text="✕",
            font=("Arial", 12),
            bg="#2563eb",
            fg="white",
            command=self.toggle_chat,
            relief="flat",
            borderwidth=0
        ).pack(side="right", padx=10)

        # Chat display area
        self.chat_display = scrolledtext.ScrolledText(
            self.chat_frame,
            wrap=tk.WORD,
            font=("Arial", 12),
            bg="#f7f7f7",
            bd=0,
            height=20
        )
        self.chat_display.pack(padx=10, pady=10, fill="both", expand=True)
        self.chat_display.tag_configure("bot", justify="left", lmargin1=10, lmargin2=10)
        self.chat_display.tag_configure("user", justify="right", lmargin1=100, rmargin=10)
        self.chat_display.tag_configure("bot_bubble", background="#ffffff", foreground="#1f2937", relief="raised", borderwidth=1)
        self.chat_display.tag_configure("user_bubble", background="#2563eb", foreground="white")
        self.chat_display.config(state="disabled")

        # Suggested questions area
        self.suggestions_frame = tk.Frame(self.chat_frame, bg="#f7f7f7")
        self.suggestions_frame.pack(fill="x", padx=10, pady=5)

        # Input area
        self.input_frame = tk.Frame(self.chat_frame, bg="white", borderwidth=1, relief="solid")
        self.input_frame.pack(fill="x", padx=10, pady=5)
        self.input_entry = tk.Entry(self.input_frame, font=("Arial", 12), relief="flat")
        self.input_entry.pack(side="left", fill="x", expand=True, padx=5, pady=5)
        self.input_entry.bind("<Return>", lambda event: self.handle_send())
        self.send_button = tk.Button(
            self.input_frame,
            text="➤",
            font=("Arial", 12),
            bg="#2563eb",
            fg="white",
            command=self.handle_send,
            relief="flat",
            borderwidth=0
        )
        self.send_button.pack(side="right", padx=5)

        # Footer
        tk.Label(
            self.chat_frame,
            text="Powered by Jam Analytics AI",
            font=("Arial", 8),
            fg="#6b7280",
            bg="white",
            pady=5
        ).pack()

        # Initially hide the chat window
        self.chat_frame.place_forget()

        # Display initial greeting
        self.display_message(self.chatbot.get_greeting(), "bot")
        self.update_suggestions()

    def toggle_chat(self):
        if self.is_open:
            self.chat_frame.place_forget()
            self.is_open = False
        else:
            self.chat_frame.place(x=0, y=0, width=400, height=600)
            self.is_open = True
            self.update_suggestions()

    def display_message(self, text, sender):
        self.chat_display.config(state="normal")
        tag = "bot" if sender == "bot" else "user"
        bubble_tag = "bot_bubble" if sender == "bot" else "user_bubble"
        self.chat_display.insert(tk.END, f"{text}\n", (tag, bubble_tag))
        self.chat_display.insert(tk.END, "\n")
        self.chat_display.config(state="disabled")
        self.chat_display.see(tk.END)

    def get_follow_up_suggestions(self, last_bot_message):
        msg = last_bot_message.lower()
        if "plan" in msg or "pricing" in msg:
            return [
                "Tell me about the Pro plan",
                "What's included in Enterprise?",
                "Is there a free trial?",
                "How many team members can I add?"
            ]
        elif "feature" in msg:
            return [
                "Tell me about workflows",
                "How do integrations work?",
                "Explain analytics dashboards",
                "What about security?"
            ]
        elif "launch" in msg or "waitlist" in msg:
            return [
                "How do I join the waitlist?",
                "Will there be early access?",
                "What features at launch?",
                "Tell me about pricing"
            ]
        elif "trial" in msg:
            return [
                "What's included in the trial?",
                "Do I need a credit card?",
                "Can I cancel anytime?",
                "What happens after 14 days?"
            ]
        else:
            return self.chatbot.get_options()

    def update_suggestions(self):
        # Clear previous suggestions
        for widget in self.suggestions_frame.winfo_children():
            widget.destroy()

        # Get suggestions based on the last bot message
        last_bot_message = self.messages[-1][0] if self.messages and self.messages[-1][1] == "bot" else ""
        suggestions = self.get_follow_up_suggestions(last_bot_message)

        # Display new suggestions
        for suggestion in suggestions:
            btn = tk.Button(
                self.suggestions_frame,
                text=suggestion,
                font=("Arial", 10),
                bg="#e5e7eb",
                fg="#2563eb",
                relief="flat",
                borderwidth=1,
                command=lambda s=suggestion: self.handle_suggestion(s)
            )
            btn.pack(side="left", padx=5, pady=2)

    def handle_suggestion(self, suggestion):
        self.input_entry.delete(0, tk.END)
        self.input_entry.insert(0, suggestion)
        self.handle_send()

    def handle_send(self):
        user_input = self.input_entry.get().strip()
        if not user_input:
            return

        # Display user message
        self.display_message(user_input, "user")
        self.messages.append((user_input, "user"))
        self.input_entry.delete(0, tk.END)

        # Get bot response in a separate thread to avoid blocking the UI
        threading.Thread(target=self.get_bot_response, args=(user_input,), daemon=True).start()

    def get_bot_response(self, user_input):
        # Simulate a small delay (as in the React code)
        time.sleep(0.6)

        # Get bot response
        response = self.chatbot.respond(user_input)
        response_time = self.chatbot.get_response_time(user_input)
        response_with_time = f"{response}\n(Response time: {response_time:.2f} microseconds)"

        # Update UI in the main thread
        self.root.after(0, self.display_message, response_with_time, "bot")
        self.messages.append((response, "bot"))
        self.root.after(0, self.update_suggestions)

def main():
    root = tk.Tk()
    app = JamAnalyticsChatbotGUI(root)
    root.mainloop()

if __name__ == "__main__":
    main()