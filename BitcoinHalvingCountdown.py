import datetime
import tkinter as tk

# Set the date of the next Bitcoin halving (example date)
bitcoin_halving_date = datetime.datetime(2024, 5, 1)

# Create a function to update the countdown label
def update_countdown():
    current_date = datetime.datetime.now()
    time_remaining = bitcoin_halving_date - current_date
    countdown_label.config(text=f"Time until Bitcoin halving: {time_remaining}")
    root.after(1000, update_countdown)  # Schedule the next update after 1 second

# Create a tkinter window
root = tk.Tk()
root.title("Bitcoin Halving Countdown")

# Create a label to display the countdown
countdown_label = tk.Label(root, font=("Helvetica", 16))
countdown_label.pack()

# Call the update_countdown function to start the countdown
update_countdown()

# Start the tkinter event loop
root.mainloop()
