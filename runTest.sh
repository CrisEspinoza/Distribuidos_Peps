#!/bin/bash
# A menu driven shell script sample template 
## ----------------------------------
# Step #1: Define variables
# ----------------------------------
EDITOR=vim
PASSWD=/etc/passwd
RED_BK='\033[0;41;30m'
GREEN_BK='\e[42m'
YELLOW_BK='\e[43m'
PURPLE_BK='\e[45m'
BLACK='\e[30m'
STD='\033[0;0;39m'
LOW_DIR='./Test/traficoBajo'
MID_DIR='./Test/traficoMedio'
HIGH_DIR='./Test/traficoAlto'
# ----------------------------------
# Step #2: User defined function
# ----------------------------------
pause(){
  read -p "Press [Enter] key to continue..." fackEnterKey
}

runArtillery(){
    echo 'Running test aumento'
        pause
}

low(){
	echo "low"
    runArtillery()
        pause
}
 
mid(){
	echo "mid"
        pause
}
 
high(){
	echo "high"
        pause
}

 
# function to display menus
show_menus() {
	clear
	echo "~~~~~~~~~~~~~~~~~~~~~"	
	echo " M A I N - M E N U"
	echo "~~~~~~~~~~~~~~~~~~~~~"
	echo "1. ${GREEN_BK} ${BLACK}Run low ${STD}"
	echo "2. ${YELLOW_BK} ${BLACK}Run mid ${STD}"
	echo "3. ${PURPLE_BK} ${BLACK}Run high ${STD}"
	echo "4. Exit"
}
# read input from the keyboard and take a action
# invoke the one() when the user select 1 from the menu option.
# invoke the two() when the user select 2 from the menu option.
# Exit when user the user select 3 form the menu option.
read_options(){
	local choice
	read -p "Enter choice [ 1 - 4] " choice
	case $choice in
		1) low ;;
		2) mid ;;
		3) high ;;
		4) exit 0;;
		*) echo -e "${RED_BK}Error...${STD}" && sleep 2
	esac
}
 
# ----------------------------------------------
# Step #3: Trap CTRL+C, CTRL+Z and quit singles
# ----------------------------------------------
trap '' SIGINT SIGQUIT SIGTSTP
 
# -----------------------------------
# Step #4: Main logic - infinite loop
# ------------------------------------
while true
do
 
	show_menus
	read_options
done