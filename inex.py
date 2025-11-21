# PYTHON STOP WATCH

import sys

from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QHBoxLayout, QPushButton, QLabel

from PyQt5.QtCore import QTime, QTimer, Qt

class stopwatch(QWidget):
    def__init__(self)
    super().__init__()
    self.time = QTime(0,0,0,0)
    self.time_label = QLabel("00:00:00.00", self)
    self.start_button = QPushButton("start", self)
    self.stop_button = QPushButton("stop", self)
    self.reset_button = QPushButton("reset", self)
    self.timer = QTimer()
    self.initUI()

    def initUI():
        self.setWindowTitle("stopwatch", self)

        vbox = QVBoxLayout()
        self.addWidget(self.time_label)

        self.setLayout(vbox)

        hbox = QHBoxLayout()

        self.addWidget(self.start_button)
        self.addWidget(self.stop_button)
        self.addWidget(self.reset_button)

        self.addLayout(hbox)

        self.setStyleSheet("""
            QPushButton, QLabel{
                           padding:20px;
                           font-weight:bold;
                           font-family:callibri;
                           
            }
            QPushButton{
                           font-size:50px;
            }
            QLabel{
                           font-size:120px;
                           background-color:white;
                           border-radius:20px;
            }               

            """)
        
        self.star_button.clicked.connect(self.start)
        self.stop_button.clicked.connect(self.stop)
        self.reset_button.clicked.connect(self.reset)
        self.timer.timeout.connect(self.update_display)

        def start(self):
            self.timer.start(10)
        def stop(self):
            self.timer.stop()
        def reset(self):
            self.timer.stop()
            self.time = QTime(0,0,0,0)
            self.time_label.setText(self.fmt_time(self,time))
        def fmt_time(self,time)
            hours = time.hour()
            minutes = time.minute()
            seconds = time.second()
            milliseconds = time.msc()//10
            return f"{hours:02}:{minutes:02}:{seconds:02}.{milliseconds:02}"
        def update_display(self):
            self.time = self.time.addMsecs(10)
            self.time = label.setText(self.fmt_time(self,time))
def main():
    app = QApplication(sys,argv)
    Stopwatch = stopwatch()
    stopwatch.show()
    sys.exit(app.exec_())

if__name__=="__main__":
main()


    
    
