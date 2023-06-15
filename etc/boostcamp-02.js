/* 문제

여러분들은 새로운 컴퓨터를 만들고 8바이트 단위로 관리하는 타입별 메모리 관리 방식을 시뮬레이션하려고 합니다.
지원하는 타입별 크기는 다음과 같습니다.

BOOL 1바이트
SHORT 2바이트
FLOAT 4바이트
INT 8바이트
LONG 16바이트

매개변수 param0에 타입들을 입력한 순서대로 메모리를 할당한 결과를 8바이트 단위로 구분해서 return해주는 solution 함수를 작성하세요.
단, BOOL을 제외한 8바이트보다 작은 타입들이 연속될 경우에는 사이에 패딩(.)을 붙여야 합니다. SHORT는 2배수, FLOAT는 4배수가 되도록 메모리를 할당해야 합니다.

예를 들어 BOOL 타입 이후에 BOOL 타입은 바로 붙어서 할당할 수 있습니다.
"BOOL", "BOOL" → "##......"

그렇지만 BOOL 타입 이후에 SHORT, FLOAT를 할당하기 위해서는 각각 1개, 3개 패딩을 붙여야 합니다.
"BOOL", "SHORT" → "#.##...."
"BOOL", "FLOAT" → "#...####"
"BOOL", "SHORT", "FLOAT" → "#.######"

BOOL 타입 이후에 크기가 8바이트 이상인 타입은 7개 패딩을 붙여야 합니다.
"BOOL", "INT" → "#.......,########"

BOOL과 마찬가지로 8바이트보다 작은 SHORT, FLOAT도 뒤에 패딩을 붙여야 합니다.
"SHORT", "BOOL" → "###....."
"FLOAT", "SHORT" → "######.."

제한 사항
- 입력 타입은 1개 이상, 100개 이하까지만 가능합니다.
- 출력하는 메모리 최대 크기는 128바이트를 기준으로 동작합니다. 따라서 128바이트보다 큰 메모리 할당은 불가능합니다.
- 만약 타입 하나라도 더 이상 할당할 수 없는 경우는 "HALT"를 리턴합니다.

입출력 예시

1. ["INT", "INT", "BOOL", "SHORT", "LONG"]
      ➡️ return "########,########,#.##....,########,########"
2. ["INT", "SHORT", "FLOAT", "INT","BOOL"]
      ➡️ return "########,##..####,########,#......."
3. ["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"]
      ➡️ return "########,#.......,########"
4. ["BOOL", "LONG", "SHORT", "LONG", "BOOL", "LONG", "BOOL", "LONG", "SHORT", "LONG", "LONG"]
      ➡️ return "HALT"

입출력 예 설명

1.BOOL 이후에 SHORT 선언해서 1바이트 패딩, SHORT 이후에 LONG 선언해서 4바이트 패딩
2. SHORT 이후에 FALOAT 선언해서 2바이트 패딩, 마지막에 BOOL 이 나와서 7 바이트 패딩
3. FLOAT 이후에 SHORT 선언, SHORT 이후 BOOL, BOOL 두번 선언해서 8바이트 가득 채움 이후 BOOL 타입 선언으로 다음 영역에서 7바이트 패딩
4. BOOL이나 SHORT 이후에 LONG 선언해서 8+16+8+16+8+16+8+16+8+16+16 = 136 바이트 메모리 최대 크기 128바이트를 넘기때문에 HALT
*/
const MEMORY_TYPE = {
    BOOL: 1,
    SHORT: 2,
    FLOAT: 4,
    INT: 8,
    LONG: 16,
}

const MAX_BYTE = 128;

// let arr = ["BOOL", "BOOL"];
// arr = ["BOOL", "SHORT"];
// arr = ["BOOL", "FLOAT"];
// arr = ["BOOL", "SHORT", "FLOAT"];
// arr = ["BOOL", "INT"];
// arr = ["SHORT", "BOOL"];
// arr = ["FLOAT", "SHORT"];
// arr = ["INT", "INT", "BOOL", "SHORT", "LONG"];
// arr = ["INT", "SHORT", "FLOAT", "INT","BOOL"];
// arr = ["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"];
// arr = ["BOOL", "LONG", "SHORT", "LONG", "BOOL", "LONG", "BOOL", "LONG", "SHORT", "LONG", "LONG"];

function solution(arr) {
    let padding = 0;
    let memory = '';
    let size = 0;


    for (let i = 0; i < arr.length; i++) {
        const prevDataType = arr[i - 1];
        const nextDataType = arr[i + 1];
        switch (arr[i]) {
            case 'BOOL':
                size += MEMORY_TYPE[arr[i]];
                memory += '#'
                if (i + 1 < arr.length) {
                    if (nextDataType === 'SHORT') {
                        memory += '.';
                        size += 1;
                    } else if (nextDataType === 'FLOAT') {
                        memory += '...';
                        size += 3;
                    } else if (nextDataType === 'INT') {
                        memory += '.......';
                        size += 7;
                    } else if(nextDataType === 'LONG') {
                        memory += '........';
                        size += 7;
                    }
                }
                break;
            case 'SHORT':
                size += MEMORY_TYPE[arr[i]];
                memory += '##'
                if (i + 1 < arr.length) {
                    if (nextDataType === 'LONG') {
                        if(prevDataType === "BOOL") {
                            memory += '....';
                            size += 4;
                        } else {
                            memory += '......';
                            size += 6;
                        }
                    } else if((prevDataType === 'INT' || prevDataType === "LONG")&& nextDataType === "FLOAT") {
                        memory += '..';
                        size += 2;
                    }
                }
                break;
            case 'FLOAT':
                size += MEMORY_TYPE[arr[i]];
                memory += '####'
                break;
            case 'INT':
                size += MEMORY_TYPE[arr[i]];
                memory += '########'
                break;
            case 'LONG':
                size += MEMORY_TYPE[arr[i]];
                memory += '################'
                break;
        }
    }

    if (size > MAX_BYTE) {
        return "HALT";
    }

    if (memory.length % 8 !== 0) {
        padding = 8 - (memory.length % 8);
        memory += '.'.repeat(padding);
        size += padding;
    }

    console.log(size, memory.length);


    return memory.match(/.{1,8}/g).join(',')
}

function solution(arr) {
    let memory = '';
    const CONTAINER_BUFFER = 8;
    const MAX_BYTE = 128;
    const dataSize = {
        BOOL: () => assignData(1),
        SHORT: () => assignData(2),
        FLOAT: () => assignData(4),
        INT: () => assignData(8),
        LONG: () => {
            assignData(8),
                assignData(8)
        },
    }

    const assignData = (dataSize) => {
        while (memory.length % dataSize !== 0) {
            memory += '.';
        }

        for (let i = 0; i < dataSize; i++) {
            memory += '#';
        }
    }

    for(const type of arr) {
        dataSize[type]();
    }

    while (memory.length % CONTAINER_BUFFER !== 0) {
        memory += '.';
    }

    if(memory.length > MAX_BYTE) return "HALT";

    return memory.match(/.{1,8}/g).join(',')

}


function test(dataArray) {
    dataArray.forEach(([data, result]) => {
        const output = solution(data);
        console.log(output === result ? '✅' : '❌', data, '\n', output);
    });
}


const testData = [
    [["BOOL", "BOOL"], "##......"],
    [["BOOL", "SHORT"], "#.##...."],
    [["BOOL", "FLOAT"], "#...####"],
    [["BOOL", "SHORT", "FLOAT"], "#.######"],
    [["BOOL", "INT"], "#.......,########"],
    [["SHORT", "BOOL"], "###....."],
    [["FLOAT", "SHORT"], "######.."],
    [["INT", "INT", "BOOL", "SHORT", "LONG"], "########,########,#.##....,########,########"],
    [["INT", "SHORT", "FLOAT", "INT", "BOOL"], "########,##..####,########,#......."],
    [["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"], "########,#.......,########"],
    [["BOOL", "LONG", "SHORT", "LONG", "BOOL", "LONG", "BOOL", "LONG", "SHORT", "LONG", "LONG"], 'HALT']
]

test(testData)
