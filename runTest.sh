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
RED_BK='\e[101m'
BLACK='\e[30m'
STD='\033[0;0;39m'
LOW_DIR='traficoBajo'
MID_DIR='traficoMedio'
HIGH_DIR='traficoAlto'
EXTREME_DIR='traficoExtremo'
SCRIPTS_DIR=$LOW_DIR
RUNNING_SEQ_TEXT="baja"
OUTPUT_DIR="results"
REQUEST_DIR='./Test/request'
VERIFICATION_DIR='./Test/verification'
CASE_DIR=$REQUEST_DIR
# ----------------------------------
# Step #2: User defined function
# ----------------------------------
pause() {
    read -p "Presiona la tecla [Enter] para volver al menu ..." fackEnterKey
}
pauseInterScript() {
    read -p "Presiona la tecla [Enter] para Pasar al proximo test ..." fackEnterKey
}
runArtillery() {
    echo "Iniciando los test de carga $RUNNING_SEQ_TEXT"
    echo 'Running test Constante'
    artillery run -o $CASE_DIR/$SCRIPTS_DIR/$OUTPUT_DIR/test_traficoConstante.json $CASE_DIR/$SCRIPTS_DIR/test_traficoConstante.yml
    artillery report $CASE_DIR/$SCRIPTS_DIR/$OUTPUT_DIR/test_traficoConstante.json
    pauseInterScript
    echo 'Running test aumento'
    artillery run -o $CASE_DIR/$SCRIPTS_DIR/$OUTPUT_DIR/test_traficoAumento.json $CASE_DIR/$SCRIPTS_DIR/test_traficoAumento.yml
    artillery report $CASE_DIR/$SCRIPTS_DIR/$OUTPUT_DIR/test_traficoAumento.json
    pauseInterScript
    echo 'Running test Disminuye'
    artillery run -o $CASE_DIR/$SCRIPTS_DIR/$OUTPUT_DIR/test_traficoDisminuye.json $CASE_DIR/$SCRIPTS_DIR/test_traficoDisminuye.yml
    artillery report $CASE_DIR/$SCRIPTS_DIR/$OUTPUT_DIR/test_traficoDisminuye.json
    pauseInterScript
    echo 'Running test Gradual'
    artillery run -o $CASE_DIR/$SCRIPTS_DIR/$OUTPUT_DIR/test_traficoGradual.json $CASE_DIR/$SCRIPTS_DIR/test_traficoGradual.yml
    artillery report $CASE_DIR/$SCRIPTS_DIR/$OUTPUT_DIR/test_traficoGradual.json
    pauseInterScript
}

low() {
    SCRIPTS_DIR=$LOW_DIR
    RUNNING_SEQ_TEXT="Baja"
    runArtillery
    pause
}

mid() {
    SCRIPTS_DIR=$MID_DIR
    RUNNING_SEQ_TEXT="Media"
    runArtillery
    pause
}

high() {
    SCRIPTS_DIR=$HIGH_DIR
    RUNNING_SEQ_TEXT="Alta"
    runArtillery
    pause
}

extreme() {
    SCRIPTS_DIR=$EXTREME_DIR
    RUNNING_SEQ_TEXT="Extrema"
    runArtillery
    pause
}

set_request() {
    CASE_DIR=$REQUEST_DIR
    show_charge
}

set_verification() {
    CASE_DIR=$VERIFICATION_DIR
    show_charge
}

show_case() {
    clear
    echo "~~~~~~~~~~~~~~~~~~~~~"
    echo " Selecciona el caso de prueba que quieres iniciar "
    echo "~~~~~~~~~~~~~~~~~~~~~"
    echo "1. ${GREEN_BK} ${BLACK} Solicitud de permiso ${STD}"
    echo "2. ${YELLOW_BK} ${BLACK} Verificación de un permiso ${STD}"
    echo "3. Salir"
    local case_opt
    read -p "Ingrese la opción y presione Enter [ 1 - 3] " case_opt
    case $case_opt in
    1) set_request ;;
    2) set_verification ;;
    3) exit 0 ;;
    *) echo -e "${RED_BK}Error...${STD}" && sleep 2 ;;
    esac
}

# function to display menus
show_charge() {

    clear
    echo "~~~~~~~~~~~~~~~~~~~~~"
    echo " Selecciona el ambiente de testeo "
    echo "~~~~~~~~~~~~~~~~~~~~~"
    echo "1. ${GREEN_BK} ${BLACK} Iniciar Baja ${STD}"
    echo "2. ${YELLOW_BK} ${BLACK} Iniciar Media ${STD}"
    echo "3. ${RED_BK} ${BLACK} Iniciar Alta ${STD}"
    echo "4. ${PURPLE_BK} ${BLACK} Iniciar Extrema ${STD}"
    echo "5. Salir"
    local charge
    read -p "Ingrese la opción y presione Enter [ 1 - 5] " charge
    case $charge in
    1) low ;;
    2) mid ;;
    3) high ;;
    4) extreme ;;
    5) exit 0 ;;
    *) echo -e "${RED_BK}Error...${STD}" && sleep 2 ;;
    esac

}


# ----------------------------------------------
# Step #3: Trap CTRL+C, CTRL+Z and quit singles
# ----------------------------------------------
trap '' SIGINT SIGQUIT SIGTSTP

# -----------------------------------
# Step #4: Main logic - infinite loop
# ------------------------------------
while true; do
    show_case
done
