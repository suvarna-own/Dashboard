from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/analytics")
def get_data():
    return [
        {"id": 1, "month": "Jan", "emails": 400, "opened": 320, "click_rate": 12},
        {"id": 2, "month": "Feb", "emails": 300, "opened": 240, "click_rate": 15},
        {"id": 3, "month": "Mar", "emails": 500, "opened": 450, "click_rate": 18},
        {"id": 4, "month": "Apr", "emails": 400, "opened": 310, "click_rate": 12},
        {"id": 5, "month": "May", "emails": 300, "opened": 260, "click_rate": 15},
        {"id": 6, "month": "Jun", "emails": 500, "opened": 250, "click_rate": 18},
        {"id": 7, "month": "Jul", "emails": 400, "opened": 280, "click_rate": 12},
        {"id": 8, "month": "Aug", "emails": 300, "opened": 260, "click_rate": 15},
        {"id": 9, "month": "Sep", "emails": 500, "opened": 459, "click_rate": 18},
        {"id": 10, "month": "Oct", "emails": 400, "opened": 320, "click_rate": 12},
        {"id": 11, "month": "Nov", "emails": 300, "opened": 270, "click_rate": 15},
        {"id": 12, "month": "Dec", "emails": 500, "opened": 480, "click_rate": 18}
    ]

@app.get("/messages")
def get_messages(): 
   return [
     {
      "id": 1,
      "subject": "Meeting Reminder",
      "isRead": "false"
     },
     {
      "id": 2,
      "subject": "Report",
      "isRead": "true"      
     },
     {
     "id": 3,
     "subject": "Feedback",
     "isRead": "false"
      }
]

@app.get("/notifications")
def get_notifications():
    return [
        {
            "id": 1,
            "message": "New email campaign created"
        },
        {
            "id": 2,
            "message": "Campaign completed successfully"
        }
    ]
 




