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
SCRIPTS_DIR=$LOW_DIR
RUNNING_SEQ_TEXT="baja"
OUTPUT_DIR="results"
# ----------------------------------
# Step #2: User defined function
# ----------------------------------
pause(){
  read -p "Presiona la tecla [Enter] para volver al menu ..." fackEnterKey
}
pauseInterScript(){
  read -p "Presiona la tecla [Enter] para Pasar al proximo test ..." fackEnterKey
}
runArtillery(){
    echo "Iniciando los test de carga $RUNNING_SEQ_TEXT"
    echo 'Running test aumento'
    artillery run -o $SCRIPTS_DIR/$OUTPUT_DIR/test_traficoAumento.json $SCRIPTS_DIR/test_traficoAumento.yml
        pauseInterScript
    echo 'Running test Constante'
    artillery run $SCRIPTS_DIR/$OUTPUT_DIR/test_traficoConstante.json $SCRIPTS_DIR/test_traficoConstante.yml
        pauseInterScript
    echo 'Running test Disminuye'
    artillery run $SCRIPTS_DIR/$OUTPUT_DIR/test_traficoDisminuye.json $SCRIPTS_DIR/test_traficoDisminuye.yml
        pauseInterScript
    echo 'Running test Gradual'
    artillery run $SCRIPTS_DIR/$OUTPUT_DIR/test_traficoGradual.json $SCRIPTS_DIR/test_traficoGradual.yml
        pauseInterScript
    
}

low(){
    SCRIPTS_DIR=$LOW_DIR
    RUNNING_SEQ_TEXT="Baja"
    runArtillery
        pause
}
 
mid(){
    SCRIPTS_DIR=$MID_DIR
    RUNNING_SEQ_TEXT="Media"
    runArtillery
        pause
}
 
high(){
    SCRIPTS_DIR=$HIGH_DIR
    RUNNING_SEQ_TEXT="Alta"
    runArtillery
        pause
}

 
# function to display menus
show_menus() {
	clear
	echo "~~~~~~~~~~~~~~~~~~~~~"	
	echo " M A I N - M E N U"
	echo "~~~~~~~~~~~~~~~~~~~~~"
	echo "1. ${GREEN_BK} ${BLACK}Iniciar Baja ${STD}"
	echo "2. ${YELLOW_BK} ${BLACK}Iniciar Media ${STD}"
	echo "3. ${PURPLE_BK} ${BLACK}Iniciar Alta ${STD}"
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