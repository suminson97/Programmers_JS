function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const clusterSizes = Array(m).fill(0);

    const directions = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래쪽
        [0, -1], // 왼쪽
        [-1, 0]  // 위쪽
    ];

    function bfs(startX, startY) {
        const queue = [[startX, startY]];
        visited[startX][startY] = true;
        let clusterCells = [];
        let size = 0;

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            clusterCells.push([x, y]);
            size++;

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && ny >= 0 && nx < n && ny < m && land[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return { size, clusterCells };
    }

    // 전체 그리드를 순회하며 석유 덩어리를 탐색하고 각 열에 크기를 기록
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                const { size, clusterCells } = bfs(i, j);

                // 덩어리가 포함된 모든 열에 대해 크기 추가
                const seenColumns = new Set();
                for (const [x, y] of clusterCells) {
                    if (!seenColumns.has(y)) {
                        clusterSizes[y] += size;
                        seenColumns.add(y);
                    }
                }
            }
        }
    }

    // 각 열에서 얻을 수 있는 최대 석유량 중 가장 큰 값을 반환
    return Math.max(...clusterSizes);
}
